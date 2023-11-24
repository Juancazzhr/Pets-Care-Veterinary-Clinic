package com.petscare.mspet.client;

import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name="ms-users")
public interface IUserServiceClient {

    @GetMapping("/v1/users")
    List<UserDTO> listAllUsers();

    @GetMapping("/v1/users/{id}")
    UserClientDTO getUserById(@PathVariable (value = "id") Long id);

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    class UserClientDTO{
        private UserDTO user;
        private IClientServiceClient.ClientDTO client;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    class UserDTO{
        private Long id;
        private String firstName;
        private String lastName;
        private String address;
        private Long phone;
        private String email;
        private String password;
        private RolDTO rol;

        @Data
        @AllArgsConstructor
        @NoArgsConstructor
        class RolDTO{
            private Long id;
            private String name;
            private String description;
        }
    }
}
