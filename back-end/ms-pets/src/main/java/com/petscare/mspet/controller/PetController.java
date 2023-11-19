package com.petscare.mspet.controller;

import com.petscare.mspet.client.IAppointmentServiceClient;
import com.petscare.mspet.client.IConsultServiceClient;
import com.petscare.mspet.client.IServicesProfessionalServiceClient;
import com.petscare.mspet.model.Pet;
import com.petscare.mspet.model.PetClinicalHistory;
import com.petscare.mspet.model.PetType;
import com.petscare.mspet.service.PetService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/v1/pets")
public class PetController {


    PetService petService;
    public PetController(PetService petService) {this.petService = petService;}

    //Pets
    @PostMapping
    public ResponseEntity<String> createPet(@RequestBody Pet pet){
       petService.createPet(pet);
        return ResponseEntity.status(HttpStatus.CREATED).body("Mascota creada correctamente");
    }
    @GetMapping
    public List<Pet> getAll() {
        return petService.getAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Object> searchById(@PathVariable Long id){
        if(petService.getPetById(id).isPresent()){

            return ResponseEntity.ok(petService.getPetById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La mascota con el id "+ id + " no existe");
        }
    }
//    @GetMapping("/{id}")
//    public ResponseEntity<Object> searchById(@PathVariable Long id) {
//        if (petService.getPetById(id).isPresent()) {
//
//            Long userId = petService.getPetById(id).get().getClientId();
//            ClientWithPetsDTO clientWithPetsDTO = clientFeign.getUserWithPetsById(userId);
//
//
//            Pet pet = petService.getPetById(id).get();
//            pet.setClient(clientWithPetsDTO);
//
//            return ResponseEntity.ok(pet);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La mascota con el id " + id + " no existe");
//        }
//    }


    @PutMapping
    public  ResponseEntity<Pet> updatePet(@RequestBody Pet pet) throws Exception {
        if(petService.getPetById(pet.getId()).isPresent()){
            return ResponseEntity.ok(petService.updatePet(pet));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("La mascota con el id "+ pet.getId()+ " no existe");
            throw new Exception();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePet(@PathVariable Long id) throws Exception {
        if (petService.getPetById(id).isPresent()){
            petService.deletePet(id);
            return ResponseEntity.ok("La mascota fue eliminada correctamente");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("La mascota con el id "+ id +" no existe");
            throw new Exception();
        }
    }

    //Types
    @PostMapping("/type")
    public ResponseEntity<String> createPetType(@RequestBody PetType petType){
        petService.createPetType(petType);
        return ResponseEntity.status(HttpStatus.CREATED).body("Tipo de mascota creado correctamente");
    }

    @GetMapping("/type")
    public List<PetType> getAllType() {
        return petService.getAllType();
    }
    @GetMapping("/type/{id}")
    public ResponseEntity<Object> searchTypeById(@PathVariable Long id){
        if(petService.getPetTypeById(id).isPresent()){
            return ResponseEntity.ok(petService.getPetTypeById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El tipo de mascota con el id "+ id +" no existe");
        }
    }
    @PutMapping("/type/{id}")
    public  ResponseEntity<PetType> updatePetType(@RequestBody PetType petType) throws Exception {
        if(petService.getPetTypeById(petType.getId()).isPresent()){
            return ResponseEntity.ok(petService.updatePetType(petType));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El tipo de mascota con el id "+ petType.getId()+ " no existe");
            throw new Exception();
        }
    }
    @DeleteMapping("/type/{id}")
    public ResponseEntity<String> deletePetType(@PathVariable Long id) throws Exception {
        if (petService.getPetTypeById(id).isPresent()){
            petService.deletePetType(id);
            return ResponseEntity.ok("El tipo de mascota fue eliminado correctamente");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El tipo de mascota con el id "+id+" no existe");
            throw new Exception();
        }
    }

    //History

    @PostMapping("/clinical-history")
    public ResponseEntity<String> createPetClinicalHistory(@RequestBody PetClinicalHistory petClinicalHistory){
        petService.createPetClinicalHistory(petClinicalHistory);
        return ResponseEntity.status(HttpStatus.CREATED).body("Historial clinico de mascota creado correctamente");
    }

    /*@GetMapping("/clinical-history")
    public List<PetClinicalHistory> getAllClinicalHistory() {
        return petService.getAllClinicalHistory();
    }*/





    @GetMapping("/clinical-history/{id}")
    public ResponseEntity<Object> searchClinicalHistoryById(@PathVariable Long id){
        if(petService.getPetClinicalHistoryById(id).isPresent()){
            return ResponseEntity.ok(petService.getPetClinicalHistoryById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El tipo de mascota con el id "+id+" no existe");
        }
    }
    @PutMapping("/clinical-history/{id}")
    public  ResponseEntity<PetClinicalHistory> updatePetClinicalHistory(@RequestBody PetClinicalHistory petClinicalHistory) throws Exception {
        if(petService.getPetClinicalHistoryById(petClinicalHistory.getId()).isPresent()){
            return ResponseEntity.ok(petService.updatePetClinicalHistory(petClinicalHistory));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El tipo de mascota con el id "+ petClinicalHistory.getId()+ " no existe");
            throw new Exception();
        }
    }
    @DeleteMapping("/clinical-history/{id}")
    public ResponseEntity<String> deletePetClinicalHistory(@PathVariable Long id) throws Exception {
        if (petService.getPetClinicalHistoryById(id).isPresent()){
            petService.deletePetClinicalHistory(id);
            return ResponseEntity.ok("El tipo de mascota fue eliminado correctamente");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El tipo de mascota con el id "+id+" no existe");
            throw new Exception();
        }
    }

    @GetMapping("/clinical-history")
    public List<PetHistoryConsults> getAllClinicalHistory() {
        List<PetHistoryConsults> petHistoryConsultsList = new ArrayList<>();
        List<Pet> pets = petService.getAll();
        List<IConsultServiceClient.ConsultDTO> consultDTOList = petService.listAllConsults();
        for(Pet pet : pets){
            List<IConsultServiceClient.ConsultDTO> consultDTOS = new ArrayList<>();
            for(IConsultServiceClient.ConsultDTO consultDTO : consultDTOList){
                if(pet.getPetClinicalHistory().getId() == consultDTO.getPetClinicalHistoryId()){
                    consultDTOS.add(consultDTO);
                }
            }
            if(!consultDTOS.isEmpty()){
                PetHistoryConsults petHistoryConsults = new PetHistoryConsults(pet,consultDTOS);
                petHistoryConsultsList.add(petHistoryConsults);
            }
        }
        return petHistoryConsultsList;
    }

    @GetMapping("/appointments")
    List<PetsAppointments> listAll(){
        List<PetsAppointments> petsAppointmentsList = new ArrayList<>();
        List<Pet> pets = petService.getAll();
        List<IAppointmentServiceClient.AppointmentDTO> appointmentsDTO = petService.listAllAppointments();
        List<IServicesProfessionalServiceClient.ServiceDTO> servicesDTOS = petService.listAllServices();
        for(Pet pet : pets){
            List<AppointmentsServices> appointmentsServices = new ArrayList<>();
            for(IAppointmentServiceClient.AppointmentDTO appointmentDTO : appointmentsDTO){
                for(IServicesProfessionalServiceClient.ServiceDTO serviceDTO : servicesDTOS){
                    if(appointmentDTO.getServiceID() == serviceDTO.getId()){
                        if(pet.getId() == (appointmentDTO.getPetID())){
                            AppointmentsServices appointmentsServicesSearched = new AppointmentsServices(appointmentDTO,serviceDTO);
                            appointmentsServices.add(appointmentsServicesSearched);
                        }
                    }
                }
            }
            if(!appointmentsServices.isEmpty()){
                PetsAppointments petsAppointments = new PetsAppointments(pet,appointmentsServices);
                petsAppointmentsList.add(petsAppointments);
            }
        }
        return petsAppointmentsList;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    static class PetsAppointments{
        Pet pet;
        List<AppointmentsServices> appointments = new ArrayList<>();
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    static class AppointmentsServices{
        IAppointmentServiceClient.AppointmentDTO appointmentDTO;
        IServicesProfessionalServiceClient.ServiceDTO serviceDTO;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    static class PetHistoryConsults{
        Pet pet;
        List<IConsultServiceClient.ConsultDTO> consults = new ArrayList<>();
    }

}
