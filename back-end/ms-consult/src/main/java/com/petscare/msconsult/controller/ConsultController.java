package com.petscare.msconsult.controller;

import com.petscare.msconsult.model.Consult;
import com.petscare.msconsult.service.ConsultService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/v1/consults")
public class ConsultController {
    ConsultService consultService;
    public ConsultController(ConsultService consultService) {this.consultService = consultService;}


    //Consult

    @PostMapping
    public ResponseEntity<String> createConsult(@RequestBody Consult consult){
        consultService.createConsult(consult);
        return ResponseEntity.status(HttpStatus.CREATED).body("Consulta creada correctamente");
    }

    @GetMapping
    public List<Consult> getAllConsult() {
        return consultService.getAllConsult();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Object> searchConsultById(@PathVariable Long id){
        if(consultService.getConsultById(id).isPresent()){
            return ResponseEntity.ok(consultService.getConsultById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La consulta con el id "+id+" no existe");
        }
    }
    @PutMapping("/{id}")
    public  ResponseEntity<Consult> updateConsult(@RequestBody Consult consult) throws Exception {
        if(consultService.getConsultById(consult.getId()).isPresent()){
            return ResponseEntity.ok(consultService.updateConsult(consult));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("La consulta con el id "+ consult.getId()+ " no existe");
            throw new Exception();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteConsult(@PathVariable Long id) throws Exception {
        if (consultService.getConsultById(id).isPresent()){
            consultService.deleteConsult(id);
            return ResponseEntity.ok("La consulta fue eliminada correctamente");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("La consulta con el id "+id+" no existe");
            throw new Exception();
        }
    }

}
