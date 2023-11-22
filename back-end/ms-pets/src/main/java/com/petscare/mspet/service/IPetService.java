package com.petscare.mspet.service;

import com.petscare.mspet.client.*;
import com.petscare.mspet.model.Pet;
import com.petscare.mspet.model.PetClinicalHistory;
import com.petscare.mspet.model.PetType;

import java.util.List;
import java.util.Optional;

public interface IPetService {
    //Pets
    List<Pet> getAll();
    Optional<Pet> getPetById(Long id);
    Pet createPet(Pet pet);
    void deletePet(Long id) throws Exception;
    Pet updatePet(Pet pet) throws Exception;

    //Types
    List<PetType> getAllType();
    Optional<PetType> getPetTypeById(Long id);
    PetType createPetType(PetType petType);
    void deletePetType(Long id) throws Exception;
    PetType updatePetType(PetType petType) throws Exception;

    PetType searchByType(PetType petType);

    //History
    List<PetClinicalHistory> getAllClinicalHistory();
    Optional<PetClinicalHistory> getPetClinicalHistoryById(Long id);
    PetClinicalHistory createPetClinicalHistory(PetClinicalHistory petClinicalHistory);
    void deletePetClinicalHistory(Long id) throws Exception;
    PetClinicalHistory updatePetClinicalHistory(PetClinicalHistory petClinicalHistory) throws Exception;

    List<IAppointmentServiceClient.AppointmentDTO> listAllAppointments();

    List<IServicesProfessionalServiceClient.ServiceDTO> listAllServices();

    List<IConsultServiceClient.ConsultDTO> listAllConsults();

    List<IUserServiceClient.UserDTO> listAllUsers();

    List<IClientServiceClient.ClientDTO> listAllClients();

    IUserServiceClient.UserClientDTO getUserById(Long id);

}
