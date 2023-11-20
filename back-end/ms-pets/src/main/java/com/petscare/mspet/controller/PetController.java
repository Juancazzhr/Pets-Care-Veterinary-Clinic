package com.petscare.mspet.controller;

import com.petscare.mspet.client.IAppointmentServiceClient;
import com.petscare.mspet.client.IConsultServiceClient;
import com.petscare.mspet.client.IServicesProfessionalServiceClient;
import com.petscare.mspet.model.Pet;
import com.petscare.mspet.model.PetClinicalHistory;
import com.petscare.mspet.model.PetType;
import com.petscare.mspet.service.PetService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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

    public PetController(PetService petService) {
        this.petService = petService;
    }

    //Pets
    @Operation(summary = "Create a new pet")
    @PostMapping
    public ResponseEntity<String> createPet(@RequestBody Pet pet) throws Exception {
        Pet newPet = petService.createPet(pet);
        PetClinicalHistory petClinicalHistory = new PetClinicalHistory(LocalDate.now(), newPet);
        PetClinicalHistory petClinicalHistoryNewPet = petService.createPetClinicalHistory(petClinicalHistory);
        Pet newPetCreated = new Pet(newPet.getId(), newPet.getName(), newPet.getSize(), newPet.getRace(), newPet.getClientId(), newPet.getPetType(), petClinicalHistoryNewPet);
        petService.updatePet(newPetCreated);
        return ResponseEntity.status(HttpStatus.CREATED).body("Pet successfully created.");
    }

    @Operation(summary = "Get all pets")
    @GetMapping
    public List<Pet> getAll() {
        return petService.getAll();
    }

    @Operation(summary = "Get a pet by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the pet",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Pet.class)) }),
            @ApiResponse(responseCode = "404", description = "Pet not found",
                    content = @Content)
    })
    @GetMapping("/{id}")
    public ResponseEntity<Object> searchById(@Parameter(description = "ID of the pet to be searched")
                                             @PathVariable Long id) {
        if (petService.getPetById(id).isPresent()) {
            return ResponseEntity.ok(petService.getPetById(id).get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet with id " + id + " doesn't exist.");
        }
    }

    @Operation(summary = "Update an existing pet")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Updated the pet",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Pet.class)) }),
            @ApiResponse(responseCode = "404", description = "Pet not found",
                    content = @Content)
    })
    @PutMapping
    public ResponseEntity<Pet> updatePet(@RequestBody Pet pet) throws Exception {
        if (petService.getPetById(pet.getId()).isPresent()) {
            PetClinicalHistory petClinicalHistory = new PetClinicalHistory(pet.getPetClinicalHistory().getId(), pet.getPetClinicalHistory().getCratedAt(), pet.getPetClinicalHistory().getLastUpdate(), pet.getPetClinicalHistory().getWeigth(), pet);
            PetClinicalHistory petClinicalHistoryUpdatedPet = petService.updatePetClinicalHistory(petClinicalHistory);
            Pet updatedPet = new Pet(pet.getId(), pet.getName(), pet.getSize(), pet.getRace(), pet.getClientId(), pet.getPetType(), petClinicalHistoryUpdatedPet);
            return ResponseEntity.ok(petService.updatePet(updatedPet));
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet with id " + pet.getId() + " doesn't exist.");
            throw new Exception();
        }
    }

    @Operation(summary = "Delete a pet by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Pet deleted"),
            @ApiResponse(responseCode = "404", description = "Pet not found",
                    content = @Content)
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePet(@Parameter(description = "ID of the pet to be deleted")
                                            @PathVariable Long id) throws Exception {
        if (petService.getPetById(id).isPresent()) {
            Optional<Pet> petToDelete = petService.getPetById(id);
            Optional<PetClinicalHistory> petClinicalHistoryToDelete = petService.getPetClinicalHistoryById(petToDelete.get().getPetClinicalHistory().getId());
            petService.deletePetClinicalHistory(petClinicalHistoryToDelete.get().getId());
            petService.deletePet(id);
            return ResponseEntity.ok("Pet successfully deleted.");
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet with id " + id + " doesn't exist.");
            throw new Exception();
        }
    }

    //Types
    @Operation(summary = "Create a new pet type")
    @PostMapping("/type")
    public ResponseEntity<String> createPetType(@RequestBody PetType petType) {
        petService.createPetType(petType);
        return ResponseEntity.status(HttpStatus.CREATED).body("Pet type successfully created.");
    }

    @Operation(summary = "Get all pet types")
    @GetMapping("/type")
    public List<PetType> getAllType() {
        return petService.getAllType();
    }

    @Operation(summary = "Get a pet type by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the pet type",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = PetType.class)) }),
            @ApiResponse(responseCode = "404", description = "Pet type not found",
                    content = @Content)
    })
    @GetMapping("/type/{id}")
    public ResponseEntity<Object> searchTypeById(@Parameter(description = "ID of the pet type to be searched")
                                                 @PathVariable Long id) {
        if (petService.getPetTypeById(id).isPresent()) {
            return ResponseEntity.ok(petService.getPetTypeById(id).get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet type with id " + id + " doesn't exist.");
        }
    }

    @Operation(summary = "Update an existing pet type")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Updated the pet type",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = PetType.class)) }),
            @ApiResponse(responseCode = "404", description = "Pet type not found",
                    content = @Content)
    })
    @PutMapping("/type")
    public ResponseEntity<PetType> updatePetType(@RequestBody PetType petType) throws Exception {
        if (petService.getPetTypeById(petType.getId()).isPresent()) {
            return ResponseEntity.ok(petService.updatePetType(petType));
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet type with id " + petType.getId() + " doesn't exist.");
            throw new Exception();
        }
    }

    @Operation(summary = "Delete a pet type by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Pet type deleted"),
            @ApiResponse(responseCode = "404", description = "Pet type not found",
                    content = @Content)
    })
    @DeleteMapping("/type/{id}")
    public ResponseEntity<String> deletePetType(@Parameter(description = "ID of the pet type to be deleted")
                                                @PathVariable Long id) throws Exception {
        if (petService.getPetTypeById(id).isPresent()) {
            petService.deletePetType(id);
            return ResponseEntity.ok("Pet type successfully deleted.");
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet type with id " + id + " doesn't exist.");
            throw new Exception();
        }
    }

    //History

    @Operation(summary = "Create a new pet clinical history")
    @PostMapping("/clinical-history")
    public ResponseEntity<String> createPetClinicalHistory(@RequestBody PetClinicalHistory petClinicalHistory) {
        petService.createPetClinicalHistory(petClinicalHistory);
        return ResponseEntity.status(HttpStatus.CREATED).body("Clinical history successfully created.");
    }

    @Operation(summary = "Get all pet clinical histories")
    @GetMapping("/clinical-history")
    List<PetClinicalHistory> getAllClinicalHistories() {
        return petService.getAllClinicalHistory();
    }

    @Operation(summary = "Get a pet clinical history by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the clinical history",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = PetClinicalHistory.class)) }),
            @ApiResponse(responseCode = "404", description = "Clinical history not found",
                    content = @Content)
    })
    @GetMapping("/clinical-history/{id}")
    public ResponseEntity<Object> searchClinicalHistoryById(@Parameter(description = "ID of the clinical history to be searched")
                                                            @PathVariable Long id) {
        if (petService.getPetClinicalHistoryById(id).isPresent()) {
            return ResponseEntity.ok(petService.getPetClinicalHistoryById(id).get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Clinical history with id " + id + " doesn't exist.");
        }
    }

    @Operation(summary = "Update an existing pet clinical history")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Updated the clinical history",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = PetClinicalHistory.class)) }),
            @ApiResponse(responseCode = "404", description = "Clinical history not found",
                    content = @Content)
    })
    @PutMapping("/clinical-history")
    public ResponseEntity<PetClinicalHistory> updatePetClinicalHistory(@RequestBody PetClinicalHistory petClinicalHistory) throws Exception {
        if (petService.getPetClinicalHistoryById(petClinicalHistory.getId()).isPresent()) {
            return ResponseEntity.ok(petService.updatePetClinicalHistory(petClinicalHistory));
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Clinical history with id " + petClinicalHistory.getId() + " doesn't exist.");
            throw new Exception();
        }
    }

    @Operation(summary = "Delete a pet clinical history by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Clinical history deleted"),
            @ApiResponse(responseCode = "404", description = "Clinical history not found",
                    content = @Content)
    })
    @DeleteMapping("/clinical-history/{id}")
    public ResponseEntity<String> deletePetClinicalHistory(@Parameter(description = "ID of the clinical history to be deleted")
                                                           @PathVariable Long id) throws Exception {
        if (petService.getPetClinicalHistoryById(id).isPresent()) {
            petService.deletePetClinicalHistory(id);
            return ResponseEntity.ok("Clinical history successfully deleted.");
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Clinical history with id " + id + " doesn't exist.");
            throw new Exception();
        }
    }

    @Operation(summary = "Get all pet history consults")
    @GetMapping("/consults")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found pet history consults",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = PetHistoryConsults.class)) }),
            @ApiResponse(responseCode = "404", description = "Pet history consults not found",
                    content = @Content)
    })
    public List<PetHistoryConsults> getAllClinicalHistory() {
        List<PetHistoryConsults> petHistoryConsultsList = new ArrayList<>();
        List<Pet> pets = petService.getAll();
        List<IConsultServiceClient.ConsultDTO> consultDTOList = petService.listAllConsults();
        for (Pet pet : pets) {
            List<IConsultServiceClient.ConsultDTO> consultDTOS = new ArrayList<>();
            for (IConsultServiceClient.ConsultDTO consultDTO : consultDTOList) {
                if (pet.getPetClinicalHistory().getId() == consultDTO.getPetClinicalHistoryId()) {
                    consultDTOS.add(consultDTO);
                }
            }
            if (!consultDTOS.isEmpty()) {
                PetHistoryConsults petHistoryConsults = new PetHistoryConsults(pet, consultDTOS);
                petHistoryConsultsList.add(petHistoryConsults);
            }
        }
        return petHistoryConsultsList;
    }

    @Operation(summary = "Get all pets appointments")
    @GetMapping("/appointments")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found pets appointments",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = PetsAppointments.class)) }),
            @ApiResponse(responseCode = "404", description = "Pets appointments not found",
                    content = @Content)
    })
    public List<PetsAppointments> listAll() {
        List<PetsAppointments> petsAppointmentsList = new ArrayList<>();
        List<Pet> pets = petService.getAll();
        List<IAppointmentServiceClient.AppointmentDTO> appointmentsDTO = petService.listAllAppointments();
        List<IServicesProfessionalServiceClient.ServiceDTO> servicesDTOS = petService.listAllServices();
        for (Pet pet : pets) {
            List<AppointmentsServices> appointmentsServices = new ArrayList<>();
            for (IAppointmentServiceClient.AppointmentDTO appointmentDTO : appointmentsDTO) {
                for (IServicesProfessionalServiceClient.ServiceDTO serviceDTO : servicesDTOS) {
                    if (appointmentDTO.getServiceID() == serviceDTO.getId()) {
                        if (pet.getId() == (appointmentDTO.getPetID())) {
                            AppointmentsServices appointmentsServicesSearched = new AppointmentsServices(appointmentDTO, serviceDTO);
                            appointmentsServices.add(appointmentsServicesSearched);
                        }
                    }
                }
            }
            if (!appointmentsServices.isEmpty()) {
                PetsAppointments petsAppointments = new PetsAppointments(pet, appointmentsServices);
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
