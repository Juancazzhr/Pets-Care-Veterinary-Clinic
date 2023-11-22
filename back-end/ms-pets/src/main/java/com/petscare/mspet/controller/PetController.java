package com.petscare.mspet.controller;

import com.petscare.mspet.client.*;
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


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/pets")
public class PetController {


    PetService petService;
    public PetController(PetService petService) {this.petService = petService;}

    //Pets
    @PostMapping
    public ResponseEntity<String> createPet(@RequestBody Pet pet) throws Exception {
        Pet newPet = petService.createPet(pet);
        PetClinicalHistory petClinicalHistory = new PetClinicalHistory(LocalDate.now(),newPet);
        PetClinicalHistory petClinicalHistoryNewPet = petService.createPetClinicalHistory(petClinicalHistory);
        Pet newPetCreated = new Pet(newPet.getId(),newPet.getName(),newPet.getSize(),newPet.getRace(),newPet.getClientId(),newPet.getPetType(),petClinicalHistoryNewPet);
        petService.updatePet(newPetCreated);
        return ResponseEntity.status(HttpStatus.CREATED).body("Pet successfully created.");
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
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet with id "+ id + " doesn't exist.");
        }
    }
    @PutMapping
    public  ResponseEntity<Pet> updatePet(@RequestBody Pet pet) throws Exception {
        if(petService.getPetById(pet.getId()).isPresent()){
            PetClinicalHistory petClinicalHistory = new PetClinicalHistory(pet.getPetClinicalHistory().getId(),pet.getPetClinicalHistory().getCratedAt(),pet.getPetClinicalHistory().getLastUpdate(), pet.getPetClinicalHistory().getWeigth(), pet);
            PetClinicalHistory petClinicalHistoryUpdatedPet = petService.updatePetClinicalHistory(petClinicalHistory);
            System.out.println(petClinicalHistoryUpdatedPet);
            Pet updatedPet = new Pet(pet.getId(),pet.getName(),pet.getSize(),pet.getRace(),pet.getClientId(),pet.getPetType(),petClinicalHistoryUpdatedPet);
            System.out.println(updatedPet);
            return ResponseEntity.ok(petService.updatePet(updatedPet));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet with id "+ pet.getId()+ " doesn't exist.");
            throw new Exception();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePet(@PathVariable Long id) throws Exception {
        if (petService.getPetById(id).isPresent()){
            Optional<Pet> petToDelete = petService.getPetById(id);
            Optional<PetClinicalHistory> petClinicalHistoryToDelete = petService.getPetClinicalHistoryById(petToDelete.get().getPetClinicalHistory().getId());
            petService.deletePetClinicalHistory(petClinicalHistoryToDelete.get().getId());
            petService.deletePet(id);
            return ResponseEntity.ok("Pet successfully deleted.");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet with id "+ id + " doesn't exist.");
            throw new Exception();
        }
    }

    //Types
    @PostMapping("/type")
    public ResponseEntity<String> createPetType(@RequestBody PetType petType){
        petService.createPetType(petType);
        return ResponseEntity.status(HttpStatus.CREATED).body("Pet type successfully created.");
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
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet type with id "+ id +" doesn't exist.");
        }
    }
    @PutMapping("/type")
    public  ResponseEntity<PetType> updatePetType(@RequestBody PetType petType) throws Exception {
        if(petService.getPetTypeById(petType.getId()).isPresent()){
            return ResponseEntity.ok(petService.updatePetType(petType));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet type with id "+ petType.getId()+ " doesn't exist.");
            throw new Exception();
        }
    }
    @DeleteMapping("/type/{id}")
    public ResponseEntity<String> deletePetType(@PathVariable Long id) throws Exception {
        if (petService.getPetTypeById(id).isPresent()){
            petService.deletePetType(id);
            return ResponseEntity.ok("Pet type successfully deleted.");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet type with id "+id+" doesn't exist.");
            throw new Exception();
        }
    }

    //History

    @PostMapping("/clinical-history")
    public ResponseEntity<String> createPetClinicalHistory(@RequestBody PetClinicalHistory petClinicalHistory){
        petService.createPetClinicalHistory(petClinicalHistory);
        return ResponseEntity.status(HttpStatus.CREATED).body("Clinical history successfully created.");
    }

    @GetMapping("/clinical-history")
    List<PetClinicalHistory> getAllClinicalHistories(){
        return petService.getAllClinicalHistory();
    }

    @GetMapping("/clinical-history/{id}")
    public ResponseEntity<Object> searchClinicalHistoryById(@PathVariable Long id){
        if(petService.getPetClinicalHistoryById(id).isPresent()){
            return ResponseEntity.ok(petService.getPetClinicalHistoryById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Clinical history with id "+id+" doesn't exist.");
        }
    }
    @PutMapping("/clinical-history")
    public  ResponseEntity<PetClinicalHistory> updatePetClinicalHistory(@RequestBody PetClinicalHistory petClinicalHistory) throws Exception {
        if(petService.getPetClinicalHistoryById(petClinicalHistory.getId()).isPresent()){
            return ResponseEntity.ok(petService.updatePetClinicalHistory(petClinicalHistory));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Clinical history with id "+ petClinicalHistory.getId()+ " doesn't exist.");
            throw new Exception();
        }
    }
    @DeleteMapping("/clinical-history/{id}")
    public ResponseEntity<String> deletePetClinicalHistory(@PathVariable Long id) throws Exception {
        if (petService.getPetClinicalHistoryById(id).isPresent()){
            petService.deletePetClinicalHistory(id);
            return ResponseEntity.ok("Clinical history successfully deleted.");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Clinical history with id "+id+" doesn't exist.");
            throw new Exception();
        }
    }

    @GetMapping("/consults")
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

    @GetMapping("/users")
    List<PetClients> listPetsClients(){
        List<PetClients> listPetClients = new ArrayList<>();
        List<Pet> pets = petService.getAll();
        List<IUserServiceClient.UserDTO> users = petService.listAllUsers();
        List<IClientServiceClient.ClientDTO> clients = petService.listAllClients();
        for(IUserServiceClient.UserDTO userDTO : users){
            List<Pet> petList = new ArrayList<>();
            for(IClientServiceClient.ClientDTO clientDTO : clients){
                for(Pet pet : pets) {
                    if (clientDTO.getUserId() == pet.getClientId()) {
                        if (userDTO.getId() == clientDTO.getUserId()) {
                            petList.add(pet);
                        }
                    }
                }
            }
            if(!petList.isEmpty()){
                PetClients petClients = new PetClients(userDTO,petList);
                listPetClients.add(petClients);
            }
        }
        return listPetClients;
    }

    @GetMapping("/users/{id}")
    IUserServiceClient.UserClientDTO listPetsByClientId(@PathVariable Long id){
      return petService.getUserById(id);
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    static class PetClients{
        IUserServiceClient.UserDTO user;
        List<Pet> pet;
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
