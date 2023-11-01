package com.petscare.msuser.controller;

import com.petscare.msuser.model.User;
import com.petscare.msuser.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/v1/users")
public class UserController {


    UserService userService;

    public UserController(UserService userService) {this.userService = userService;}

    @PostMapping
    public ResponseEntity<String> createUser(@RequestBody User user){
        userService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("Usuario creado correctamente");
    }

    @GetMapping
    public List<User> getAll() {
        return userService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> searchById(@PathVariable Long id){
        if(userService.getUserById(id).isPresent()){
            return ResponseEntity.ok(userService.getUserById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    @PutMapping
    public  ResponseEntity<User> update(@RequestBody User user) throws Exception {
        if(userService.getUserById(user.getId()).isPresent()){
            return ResponseEntity.ok(userService.updateUser(user));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con el id "+ user.getId()+ " no existe");
            throw new Exception();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws Exception {
        if (userService.getUserById(id).isPresent()){
            userService.deleteUser(id);
            return ResponseEntity.ok("El usuario fue eliminado correctamente");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con el id "+id+" no existe");
            throw new Exception();
        }
    }

}
