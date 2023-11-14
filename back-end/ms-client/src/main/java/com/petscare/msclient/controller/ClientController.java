package com.petscare.msclient.controller;

import com.petscare.msclient.model.Client;
import com.petscare.msclient.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/clients")
public class ClientController {


    ClientService clientService;

    public ClientController(ClientService clientService) {this.clientService = clientService;}

    @PostMapping
    public ResponseEntity<String> createClient(@RequestBody Client client){
        clientService.createClient(client);
        return ResponseEntity.status(HttpStatus.CREATED).body("Cliente creado correctamente");
    }

    @GetMapping
    public List<Client> getAll() {
        return clientService.getAll();
    }



    @GetMapping("/{id}")
    public ResponseEntity<Client> searchClientById(@PathVariable Long id){
        if(clientService.getClientById(id).isPresent()){
            return ResponseEntity.ok(clientService.getClientById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping
    public  ResponseEntity<Client> updateClient(@RequestBody Client client) throws Exception {
        if(clientService.getClientById(client.getId()).isPresent()){
            return ResponseEntity.ok(clientService.updateClient(client));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El cliente con el id "+ client.getId()+ " no existe");
            throw new Exception();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteClient(@PathVariable Long id) throws Exception {
        if (clientService.getClientById(id).isPresent()){
            clientService.deleteClient(id);
            return ResponseEntity.ok("El cliente fue eliminado correctamente");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El cliente con el id "+id+" no existe");
            throw new Exception();
        }
    }
}
