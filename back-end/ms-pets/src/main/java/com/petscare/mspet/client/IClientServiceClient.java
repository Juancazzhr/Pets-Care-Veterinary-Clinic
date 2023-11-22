package com.petscare.mspet.client;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(name = "ms-clients")
public interface IClientServiceClient {

    @GetMapping("/v1/clients")
    List<ClientDTO> listClients();

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    class ClientDTO{
        private Long id;
        private Long userId;

        public ClientDTO(Long userId) {
            this.userId = userId;
        }
    }
}
