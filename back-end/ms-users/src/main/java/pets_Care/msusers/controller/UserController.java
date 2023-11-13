package pets_Care.msusers.controller;

import feign.Client;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pets_Care.msusers.client.IClientServiceClient;
import pets_Care.msusers.client.IProfessionalServiceClient;
import pets_Care.msusers.model.Rol;
import pets_Care.msusers.model.User;
import pets_Care.msusers.service.RolService;
import pets_Care.msusers.service.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/users")
public class UserController {

    UserService service;
    RolService rolService;

    public UserController(UserService service, RolService rolService) {
        this.service = service;
        this.rolService = rolService;
    }

    @PostMapping("/professional")
    public ResponseEntity<String> create(@RequestBody UserProfessional user){
        User userRequested = new User (user.getFirstName(), user.getLastName(), user.getAddress(), user.getPhone(), user.getEmail(), user.getPassword(), user.getRol());
        User userCreated = service.createUser(userRequested);
        IProfessionalServiceClient.ProfessionalDTO professionalDTOCreado = new IProfessionalServiceClient.ProfessionalDTO(user.getLicenseNumber(),userCreated.getId());
        service.createProfessional(professionalDTOCreado);
        System.out.println(userCreated);
        System.out.println(professionalDTOCreado);
        return ResponseEntity.status(HttpStatus.CREATED).body("User successfully created.");
    }

    @PostMapping("/client")
    public ResponseEntity<String> create(@RequestBody User user){
        User userCreated = service.createUser(user);
        IClientServiceClient.ClientDTO clientDTO = new IClientServiceClient.ClientDTO(userCreated.getId());
        service.createClient(clientDTO);
        System.out.println(userCreated);
        System.out.println(clientDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("User successfully created.");
    }

    @GetMapping("/clients")
    List<UsersClients> listUsersClients(){
        List<UsersClients> usersClientsList = new ArrayList<>();
        List<User> users = service.listUsers();
        List<IClientServiceClient.ClientDTO> clients = service.listClients();
        for(User user : users){
            for(IClientServiceClient.ClientDTO clientDTO : clients){
                if(user.getId() == (clientDTO.getUserId())){
                    UsersClients usersClients = new UsersClients(user, clientDTO);
                    usersClientsList.add(usersClients);
                    break;
                }
            }
        }
        return usersClientsList;
    }

    @GetMapping("/professionals")
    List<UsersProfessionals> listUsersProfessionals(){
        List<UsersProfessionals> usersProfessionalsList = new ArrayList<>();
        List<User> users = service.listUsers();
        List<IProfessionalServiceClient.ProfessionalDTO> professionals = service.listProfessionals();
        for(User user : users){
            for(IProfessionalServiceClient.ProfessionalDTO professionalDTO : professionals){
                if(user.getId() == (professionalDTO.getUserId())){
                    UsersProfessionals usersProfessionals = new UsersProfessionals(user, professionalDTO);
                    usersProfessionalsList.add(usersProfessionals);
                    break;
                }
            }
        }
        return usersProfessionalsList;
    }


    @GetMapping("/{id}")
    public ResponseEntity<Object> searchUserById(@PathVariable Long id){
        Optional<User> userSearched = service.searchUserById(id);

        if (userSearched.isPresent()) {
            User user = new User(
                    userSearched.get().getId(),
                    userSearched.get().getFirstName(),
                    userSearched.get().getLastName(),
                    userSearched.get().getAddress(),
                    userSearched.get().getPhone(),
                    userSearched.get().getEmail(),
                    userSearched.get().getPassword(),
                    userSearched.get().getRol()
            );

            List<IClientServiceClient.ClientDTO> clients = service.listClients();
            for (IClientServiceClient.ClientDTO clientDTO : clients) {
                if (user.getId().equals(clientDTO.getUserId())) {
                    UsersClients userClientSearched = new UsersClients(user, clientDTO);
                    return ResponseEntity.ok(userClientSearched);
                }
            }

            List<IProfessionalServiceClient.ProfessionalDTO> professionals = service.listProfessionals();
            for (IProfessionalServiceClient.ProfessionalDTO professionalDTO : professionals) {
                if (user.getId().equals(professionalDTO.getUserId())) {
                    UsersProfessionals userProfessionalSearched = new UsersProfessionals(user, professionalDTO);
                    return ResponseEntity.ok(userProfessionalSearched);
                }
            }
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PutMapping("/professional")
    public ResponseEntity<UsersProfessionals> update(@RequestBody UsersProfessionals userProfessional)throws Exception{
        try{
            User userRequested = new User (userProfessional.user.getId(),userProfessional.user.getFirstName(), userProfessional.user.getLastName(), userProfessional.user.getAddress(),
                    userProfessional.user.getPhone(), userProfessional.user.getEmail(), userProfessional.user.getPassword(),
                    userProfessional.user.getRol());
            User userUpdated = service.updateUser(userRequested);
            IProfessionalServiceClient.ProfessionalDTO professionalDTOUpdated = new IProfessionalServiceClient.ProfessionalDTO(userProfessional.professionalDTO.getId(),
                    userProfessional.professionalDTO.getLicenseNumber(),userUpdated.getId());
            service.updateProfessional(professionalDTOUpdated);
            UsersProfessionals userProfessionalUpdated = new UsersProfessionals(userUpdated,professionalDTOUpdated);
            return ResponseEntity.ok(userProfessionalUpdated);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/client")
    public ResponseEntity<UsersClients> update(@RequestBody UsersClients userClient)throws Exception{
        try{
            User userRequested = new User (userClient.user.getId(),userClient.user.getFirstName(), userClient.user.getLastName(), userClient.user.getAddress(),
                    userClient.user.getPhone(), userClient.user.getEmail(), userClient.user.getPassword(),
                    userClient.user.getRol());
            User userUpdated = service.updateUser(userRequested);
            IClientServiceClient.ClientDTO clientDTOUpdated = new IClientServiceClient.ClientDTO(userClient.clientDTO.getId(),userClient.clientDTO.getUserId());
            service.updateCLient(clientDTOUpdated);
            UsersClients userClientUpdated = new UsersClients(userUpdated,clientDTOUpdated);
            return ResponseEntity.ok(userClientUpdated);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
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
        int phone;
        String email;
        String password;
        Rol rol;
        String licenseNumber;
    }
}
