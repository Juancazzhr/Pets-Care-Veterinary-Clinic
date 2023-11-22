package com.petscare.msstorage.domain.service;

import jakarta.ws.rs.BadRequestException;
import jakarta.ws.rs.InternalServerErrorException;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.awscore.exception.AwsServiceException;
import software.amazon.awssdk.core.exception.SdkClientException;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.ObjectCannedACL;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Objects;
import java.util.UUID;

@Service("ObjectStorageService")
public class ObjectStorageService implements IObjectStorageService {

    private final S3Client s3Client;

    @Value("${aws.s3.bucket}")
    private String bucketName;

    public ObjectStorageService(@Qualifier("s3Client") S3Client s3Client) {
        this.s3Client = s3Client;
    }

    /**
     * Uploads a file to the S3 bucket
     * @param uuid UUID of the file
     * @param folder Folder where the file will be saved
     * @param file File to upload
     * @return URL of the uploaded file
     * @throws BadRequestException If the UUID is invalid
     * @throws InternalServerErrorException If an error occurs while uploading the file
     */
    @Override
    public String uploadFile(String uuid, String folder, MultipartFile file) throws BadRequestException, InternalServerErrorException {

        try {
            UUID parsedUUID = UUID.fromString(uuid);
            File fileToUpload = convertMultiPartFileToFile(file, parsedUUID.toString());
            String pathWhereToSave = String.join("/", folder, parsedUUID.toString());
            String fileType = Objects.requireNonNull(file.getContentType()).split("/")[1];
            String fileExtension = Objects.requireNonNull(file.getOriginalFilename()).split("\\.")[1];

            String key = String.format("%s.%s", pathWhereToSave, fileExtension);
            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(key)
                    .contentType(fileType)
                    .acl(ObjectCannedACL.PUBLIC_READ)
                    .build();

            s3Client.putObject(putObjectRequest, RequestBody.fromFile(fileToUpload));
            boolean delete = fileToUpload.delete();
            if (!delete) throw new InternalServerErrorException("Error while deleting file");

            return buildS3Url(key);


        } catch (IOException | IllegalArgumentException | AwsServiceException | SdkClientException exception) {

            String message;

            switch (exception.getClass().getSimpleName()) {
                case "IOException" -> {
                    message = "Error while converting file";
                    throw new InternalServerErrorException(message);
                }

                case "IllegalArgumentException" -> {
                    message = "Invalid UUID";
                    throw new BadRequestException(message);
                }

                case "SdkClientException", "S3Exception" -> {
                    message = "Error while uploading file";
                    throw new InternalServerErrorException(message);
                }

                default -> {
                    message = "Internal server error";
                    throw new InternalServerErrorException(message);
                }
            }
        }
    }

    /**
     * Converts a MultipartFile to a File
     *
     * @param file     File to convert
     * @param fileName Name of the file
     * @return Converted file
     * @throws IOException If an error occurs while converting the file
     */
    private File convertMultiPartFileToFile(MultipartFile file, String fileName) throws IOException {
        File convertedFile = new File(fileName);
        try (FileOutputStream fileOutputStream = new FileOutputStream(convertedFile)) {
            fileOutputStream.write(file.getBytes());
        }
        return convertedFile;
    }

    private String buildS3Url(String key) {
        return String.format("https://%s.s3.amazonaws.com/%s", bucketName, key);
    }
}
