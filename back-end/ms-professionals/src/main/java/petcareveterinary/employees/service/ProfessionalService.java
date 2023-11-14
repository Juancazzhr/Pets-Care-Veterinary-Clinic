package petcareveterinary.employees.service;


import org.springframework.stereotype.Service;
import petcareveterinary.employees.client.UserServiceClient;
import petcareveterinary.employees.model.Professional;
import petcareveterinary.employees.repository.IProfessionalRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessionalService implements IProfessionalService {

    IProfessionalRepository repository;
    UserServiceClient userServiceClient;

    public ProfessionalService(IProfessionalRepository repository, UserServiceClient userServiceClient) {
        this.repository = repository;
        this.userServiceClient = userServiceClient;
    }

    @Override
    public List<Professional> listProfessionals() {
        return repository.findAll();
    }

    @Override
    public Optional<Professional> searchProfessionalById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Professional createProfessional(Professional professional) {
        return repository.save(professional);
    }

    @Override
    public void deleteProfessional(Long id) throws Exception {
        Optional<Professional> professionalSearched = searchProfessionalById(id);
        if(professionalSearched.isPresent()){
            repository.deleteById(id);
        }else{
            throw new Exception("El empleado con el id = "+id+" no existe. Ingrese un id correcto");
        }
    }

    @Override
    public Professional updateProfessional(Professional professional) throws Exception {
        Optional<Professional> professionalSearched = searchProfessionalById(professional.getId());
        if(professionalSearched.isPresent()){
            return repository.save(professional);
        }else{
            throw new Exception("El empleado con el id = "+ professional.getId()+" no existe. Ingrese un id correcto");
        }
    }

    @Override
    public List<UserServiceClient.UserDTO> listUsers() {
        return userServiceClient.getAllUsers();
    }
}
