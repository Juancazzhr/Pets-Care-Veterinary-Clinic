package pets_Care.msusers.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pets_Care.msusers.model.User;
import pets_Care.msusers.service.UserService;

import java.util.List;

@RestController
@RequestMapping("v1/users")
public class UserController {

    UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody User user){
        service.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User successfully created.");
    }

    @GetMapping
    public List<User> listAll(){
        return service.listUsers();
    }
    @GetMapping
    List<User> listAllUsers(){
        return service.listUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> searchUserById(@PathVariable Long id){
        if(service.searchUserById(id).isPresent()){
            return ResponseEntity.ok(service.searchUserById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping
    public ResponseEntity<User> update(@RequestBody User user)throws Exception{
        if(service.searchUserById(user.getId()).isPresent()){
            return ResponseEntity.ok(service.updateUser(user));
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws Exception{
        try {
            Optional<User> userSearched = service.searchUserById(id);

            if (userSearched.isPresent()) {
                List<IClientServiceClient.ClientDTO> clients = service.listClients();
                for (IClientServiceClient.ClientDTO clientDTO : clients) {
                    if (id.equals(clientDTO.getUserId())) {
                        service.deleteUser(id);
                        service.deleteClient(clientDTO.getId());
                        return ResponseEntity.ok("User and associated client successfully deleted.");
                    }
                }

                List<IProfessionalServiceClient.ProfessionalDTO> professionals = service.listProfessionals();
                for (IProfessionalServiceClient.ProfessionalDTO professionalDTO : professionals) {
                    if (id.equals(professionalDTO.getUserId())) {
                        service.deleteUser(id);
                        service.deleteProfessional(professionalDTO.getId());
                        return ResponseEntity.ok("User and associated professional successfully deleted.");
                    }
                }
                service.deleteUser(id);
                return ResponseEntity.ok("User successfully deleted");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found or not exist.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting user");
        }
    }

    @GetMapping("/mail/{mail}")
    Optional<User> findUserByEmail(@PathVariable String mail){
        return service.findUserByEmail(mail);
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    static class UsersClients{
        User user;
        IClientServiceClient.ClientDTO clientDTO;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    static class UsersProfessionals{
        User user;
        IProfessionalServiceClient.ProfessionalDTO professionalDTO;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    static class UserProfessional{
        String firstName;
        String lastName;
        String address;
        Long phone;
        String email;
        String password;
        Rol rol;
        String licenseNumber;
    }
}