package com.petscare.mspet.service;

import com.petscare.mspet.client.*;
import com.petscare.mspet.model.PetClinicalHistory;
import com.petscare.mspet.model.PetType;
import com.petscare.mspet.repository.IPetClinicalHistory;
import com.petscare.mspet.repository.IPetRepository;
import com.petscare.mspet.model.Pet;
import com.petscare.mspet.repository.IPetTypeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetService implements IPetService{

    IPetRepository repositoryPet;
    IPetTypeRepository repositoryPetType;
    IPetClinicalHistory repositoryPetClinicalHistory;

    IAppointmentServiceClient appointmentRepository;

    IServicesProfessionalServiceClient serviceRepository;

    IConsultServiceClient consultRepository;

    IUserServiceClient userRepository;

    IClientServiceClient clientRepository;

    public PetService(IPetRepository repositoryPet, IPetTypeRepository repositoryPetType, IPetClinicalHistory repositoryPetClinicalHistory, IAppointmentServiceClient appointmentRepository, IServicesProfessionalServiceClient serviceRepository, IConsultServiceClient consultRepository, IUserServiceClient userRepository, IClientServiceClient clientRepository) {
        this.repositoryPet = repositoryPet;
        this.repositoryPetType = repositoryPetType;
        this.repositoryPetClinicalHistory = repositoryPetClinicalHistory;
        this.appointmentRepository = appointmentRepository;
        this.serviceRepository = serviceRepository;
        this.consultRepository = consultRepository;
        this.userRepository = userRepository;
        this.clientRepository = clientRepository;
    }

    //Pets
    @Override
    public List<Pet>getAll() {return repositoryPet.findAll();}
    @Override
    public Optional<Pet> getPetById(Long id) {return repositoryPet.findById(id);}
    @Override
    public Pet createPet(Pet pet) {return repositoryPet.save(pet);}
    @Override
    public void deletePet(Long id) throws Exception {
        Optional<Pet> petSearched = getPetById(id);
        if(petSearched.isPresent()){
            repositoryPet.deleteById(id);
        }else{
            throw new Exception("La mascota con el id = "+id+" no existe. Ingrese un id correcto");
        }
    }
    @Override
    public Pet updatePet(Pet pet) throws Exception {
        Optional<Pet> petSearched = getPetById(pet.getId());
        if(petSearched.isPresent()){
            return repositoryPet.save(pet);
        }else{
            throw new Exception("La mascota con el id = "+ pet.getId()+" no existe. Ingrese un id correcto");
        }
    }

    //types

    @Override
    public List<PetType>getAllType() {return repositoryPetType.findAll();}
    @Override
    public Optional<PetType> getPetTypeById(Long id) {return repositoryPetType.findById(id);}
    @Override
    public PetType createPetType(PetType petType) {return repositoryPetType.save(petType);}
    @Override
    public void deletePetType(Long id) throws Exception {
        Optional<PetType> petTypeSearched = getPetTypeById(id);
        if(petTypeSearched.isPresent()){
            repositoryPetType.deleteById(id);
        }else{
            throw new Exception("El tipo de mascota con el id = "+id+" no existe. Ingrese un id correcto");
        }
    }
    @Override
    public PetType updatePetType(PetType petType) throws Exception {
        Optional<PetType> petTypeSearched = getPetTypeById(petType.getId());
        if(petTypeSearched.isPresent()){
            return repositoryPetType.save(petType);
        }else{
            throw new Exception("El tipo de mascota con el id = "+ petType.getId()+" no existe. Ingrese un id correcto");
        }
    }

    @Override
    public PetType searchByType(PetType petType) {
        return null;
    }

    //History
    @Override
    public List<PetClinicalHistory>getAllClinicalHistory() {return repositoryPetClinicalHistory.findAll();}
    @Override
    public Optional<PetClinicalHistory> getPetClinicalHistoryById(Long id) {return repositoryPetClinicalHistory.findById(id);}
    @Override
    public PetClinicalHistory createPetClinicalHistory(PetClinicalHistory petClinicalHistory) {return repositoryPetClinicalHistory.save(petClinicalHistory);}
    @Override
    public void deletePetClinicalHistory(Long id) throws Exception {
        Optional<PetClinicalHistory> petClinicalHistorySearched = getPetClinicalHistoryById(id);
        if(petClinicalHistorySearched.isPresent()){
            repositoryPetClinicalHistory.deleteById(id);
        }else{
            throw new Exception("El tipo de mascota con el id = "+id+" no existe. Ingrese un id correcto");
        }
    }
    @Override
    public PetClinicalHistory updatePetClinicalHistory(PetClinicalHistory petClinicalHistory) throws Exception {
        Optional<PetClinicalHistory> petClinicalHistorySearched = getPetClinicalHistoryById(petClinicalHistory.getId());
        if(petClinicalHistorySearched.isPresent()){
            return repositoryPetClinicalHistory.save(petClinicalHistory);
        }else{
            throw new Exception("El tipo de mascota con el id = "+ petClinicalHistory.getId()+" no existe. Ingrese un id correcto");
        }
    }

    @Override
    public List<IAppointmentServiceClient.AppointmentDTO> listAllAppointments() {
        return appointmentRepository.listAllApointments();
    }

    @Override
    public List<IServicesProfessionalServiceClient.ServiceDTO> listAllServices() {
        return serviceRepository.listAllServices();
    }
    @Override
    public List<IConsultServiceClient.ConsultDTO> listAllConsults() {
        return consultRepository.listAllConsults();
    }

    @Override
    public List<IUserServiceClient.UserDTO> listAllUsers() {
        return userRepository.listAllUsers();
    }

    @Override
    public List<IClientServiceClient.ClientDTO> listAllClients() {
        return clientRepository.listClients();
    }

    @Override
    public IUserServiceClient.UserClientDTO getUserById(Long id) {
        return userRepository.getUserById(id);
    }
}
