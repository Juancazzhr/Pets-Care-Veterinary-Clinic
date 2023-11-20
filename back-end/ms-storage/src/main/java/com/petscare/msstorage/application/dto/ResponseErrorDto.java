package com.petscare.msstorage.application.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.Date;
import java.util.HashSet;

@Schema(name = "Response Error", description = "Error information")
public record ResponseErrorDto(@JsonAlias("time_stamp") Date timeStamp,
                               @JsonAlias("status_code") Integer statusCode,
                               @JsonAlias("message") String message,
                               @JsonAlias("errors") HashSet<String> errors) {
}
