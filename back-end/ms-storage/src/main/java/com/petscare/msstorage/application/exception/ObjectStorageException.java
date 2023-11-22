package com.petscare.msstorage.application.exception;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(reason = "Object storage exception")
public class ObjectStorageException extends RuntimeException {

    public ObjectStorageException(String message) {
        super(message);
    }

    public ObjectStorageException() {
        super();
    }
}
