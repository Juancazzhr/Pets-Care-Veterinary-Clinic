package petcareveterinary.employees.client;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import petcareveterinary.employees.config.LoadBalanceConfiguration;

import java.util.List;
import java.util.Optional;

@FeignClient(name="ms-users")
@LoadBalancerClient(value="ms-users", configuration = LoadBalanceConfiguration.class)
public interface UserServiceClient {

    @GetMapping("v1/users/{id}")
    Optional<UserDTO> getUserById(@PathVariable (value = "id") Long id);

    @RequestMapping(method = RequestMethod.GET, value = "/v1/users")
    List<UserDTO> getAllUsers();

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    class UserDTO{
        private Long id;
        private String firstName;
        private String lastName;
        private String address;
        private int phone;
        private String email;
        private String password;
        private Rol rol;

        @Data
        @AllArgsConstructor
        @NoArgsConstructor
        public static class Rol{
            private Long id;
            private String name;
            private String description;
        }
    }
}
