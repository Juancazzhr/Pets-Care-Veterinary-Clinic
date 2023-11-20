package com.petscare.msstorage.infrastructure;

public interface IS3Repository {
    String uploadFile(String uuid, String folder, String fileName, String fileExtension, byte[] file);
}
