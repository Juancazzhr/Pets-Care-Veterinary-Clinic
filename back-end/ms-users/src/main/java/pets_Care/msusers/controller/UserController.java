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
        if(service.searchUserById(id).isPresent()){
            service.deleteUser(id);
            return ResponseEntity.ok("User successfully deleted");
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with id "+id+" doesn't exist.");
        }
    }
}
