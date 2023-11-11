package petcareveterinary.employees.client;

import lombok.Data;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import petcareveterinary.employees.config.LoadBalanceConfiguration;

import java.util.List;

@FeignClient(name="ms-users")
@LoadBalancerClient(value="ms-users", configuration = LoadBalanceConfiguration.class)
public interface UserServiceClient {

    @GetMapping("/v1/users/{id}")
    ResponseEntity<UserDTO> getUserById(@PathVariable (value = "id") Long id);

    @GetMapping("/v1/users")
    List<UserDTO> getAllUsers();

    @Data
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
        public static class Rol{
            private Long id;
            private String name;
            private String description;
        }
    }
}
