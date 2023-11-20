package com.petscare.msstorage.application.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptions {

    @ExceptionHandler(ObjectStorageException.class)
    public ResponseEntity<Object> handleObjectStorageException(ObjectStorageException exception) {
        return null;
    }
}
