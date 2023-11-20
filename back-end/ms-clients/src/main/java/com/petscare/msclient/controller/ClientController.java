package com.petscare.msclient.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.petscare.msclient.model.Client;
import com.petscare.msclient.service.ClientService;

import java.util.List;

@RestController
@RequestMapping("/v1/clients")
public class ClientController {

    ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @Operation(summary = "Create a new client")
    @PostMapping
    public ResponseEntity<String> createClient(@RequestBody Client client){
        clientService.createClient(client);
        return ResponseEntity.status(HttpStatus.CREATED).body("Cliente creado correctamente");
    }

    @Operation(summary = "Get all clients")
    @GetMapping
    public List<Client> getAll() {
        return clientService.getAll();
    }

    @Operation(summary = "Get a client by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the client",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Client.class)) }),
            @ApiResponse(responseCode = "404", description = "Client not found",
                    content = @Content)
    })
    @GetMapping("/{id}")
    public ResponseEntity<Client> searchClientById(@Parameter(description = "ID of the client to be searched")
                                                   @PathVariable Long id){
        if(clientService.getClientById(id).isPresent()){
            return ResponseEntity.ok(clientService.getClientById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @Operation(summary = "Update an existing client")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Updated the client",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Client.class)) }),
            @ApiResponse(responseCode = "404", description = "Client not found",
                    content = @Content)
    })
    @PutMapping
    public ResponseEntity<Client> updateClient(@RequestBody Client client) throws Exception {
        if(clientService.getClientById(client.getId()).isPresent()){
            return ResponseEntity.ok(clientService.updateClient(client));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El cliente con el id "+ client.getId()+ " no existe");
            throw new Exception();
        }
    }

    @Operation(summary = "Delete a client by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Client deleted"),
            @ApiResponse(responseCode = "404", description = "Client not found",
                    content = @Content)
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteClient(@Parameter(description = "ID of the client to be deleted")
                                               @PathVariable Long id) throws Exception {
        if (clientService.getClientById(id).isPresent()){
            clientService.deleteClient(id);
            return ResponseEntity.ok("El cliente fue eliminado correctamente");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El cliente con el id "+id+" no existe");
            throw new Exception();
        }
    }
}
