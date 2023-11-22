package com.petscare.msstorage.application.controller;

import com.petscare.msstorage.application.dto.ResponseUploadedDto;
import com.petscare.msstorage.domain.service.ObjectStorageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.ws.rs.core.MediaType;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@Tag(name = "Object Storage", description = "Object Storage operations")
@RestController
@RequestMapping(path = "/v1/storage", produces = MediaType.APPLICATION_JSON, consumes = MediaType.MULTIPART_FORM_DATA)
public class ObjectStorageController {

    private final ObjectStorageService objectStorageService;

    public ObjectStorageController(@Qualifier("ObjectStorageService") ObjectStorageService objectStorageService) {
        this.objectStorageService = objectStorageService;
    }

    @Operation(summary = "Upload a file to the object storage")
    @PostMapping("/upload")
    public ResponseEntity<ResponseUploadedDto> uploadFile(@RequestParam("uuid") String uuid,
                                                          @RequestParam("folder") String folder,
                                                          @RequestParam("file") MultipartFile file) {

        String url = objectStorageService.uploadFile(uuid, folder, file);
        ResponseUploadedDto body = new ResponseUploadedDto(url);
        HttpStatus statusCode = HttpStatus.OK;

        return new ResponseEntity<>(body, statusCode);
    }
}
