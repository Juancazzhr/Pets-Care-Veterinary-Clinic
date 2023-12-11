package com.petscare.mspet.client;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(name = "ms-services")
public interface IServicesProfessionalServiceClient {
    @GetMapping("/v1/services")
    List<ServiceDTO> listAllServices();

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    class ServiceDTO{
        private Long id;
        private String name;
        private String description;
        private String thumbnail;
    }
}
