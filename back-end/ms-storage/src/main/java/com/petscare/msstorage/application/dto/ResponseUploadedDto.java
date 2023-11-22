package com.petscare.msstorage.application.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(name = "Response Uploaded", description = "Uploaded file information")
public record ResponseUploadedDto(String url) {
}
