package com.petscare.msstorage.infrastructure;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import software.amazon.awssdk.services.s3.S3Client;

@Repository("S3Repository")
public class S3Repository implements IS3Repository {

    private static final Logger LOGGER = LoggerFactory.getLogger(S3Repository.class);
    private final S3Client s3Client;


    public S3Repository(@Qualifier("s3Client") S3Client s3Client) {
        this.s3Client = s3Client;
    }

    @Override
    public String uploadFile(String uuid, String folder, String fileName, String fileExtension, byte[] file) {
        return null;
    }
}
