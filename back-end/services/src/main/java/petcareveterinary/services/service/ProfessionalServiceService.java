package petcareveterinary.services.service;

import org.springframework.stereotype.Service;
import petcareveterinary.services.model.ProfessionalService;
import petcareveterinary.services.repository.IProfessionalServiceRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessionalServiceService implements IProfessionalService {
    IProfessionalServiceRepository repository;

    public ProfessionalServiceService(IProfessionalServiceRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<ProfessionalService> listProfessionalServices() {
        return repository.findAll();
    }

    @Override
    public Optional<ProfessionalService> searchProfessionalServiceById(Long id) throws Exception {
        ProfessionalService serviceFounded = repository.findById(id).orElseThrow(() -> new Exception("Service with id: " + id + " does not exist. Please check the service id and try again."));
        return repository.findById(id);
    }

    @Override
    public void createProfessionalService(ProfessionalService service) {
        repository.save(service);
    }

    @Override
    public ProfessionalService updateProfessionalService(ProfessionalService service) throws Exception {
        Optional<ProfessionalService> serviceFounded = searchProfessionalServiceById(service.getId());
        if(serviceFounded.isPresent()){
            return repository.save(service);
        }else{
            throw new Exception("Service with id "+ service.getId() +" does not exist. Please check the service id and try again.");
        }
    }

    @Override
    public void deleteProfessionalService(Long id) throws Exception {
        Optional<ProfessionalService> serviceFounded = searchProfessionalServiceById(id);
        if(serviceFounded.isPresent()){
            repository.deleteById(id);
        }else{
            throw new Exception("Service with id "+id+" does not exist. Please check the service id and try again.");
        }
    }

}
