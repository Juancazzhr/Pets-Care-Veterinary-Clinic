package com.petscare.msstorage.domain.service;

import com.petscare.msstorage.application.exception.ObjectStorageException;
import org.springframework.web.multipart.MultipartFile;

public interface IObjectStorageService {
    String uploadFile(String uuid, String folder, MultipartFile file) throws ObjectStorageException;
}
