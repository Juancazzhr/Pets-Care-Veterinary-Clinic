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
    public Optional<ProfessionalService> searchProfessionalServiceById(Long id) {
        return repository.findById(id);
    }

    @Override
    public ProfessionalService createProfessionalService(ProfessionalService service) {
        return repository.save(service);
    }

    @Override
    public ProfessionalService updateProfessionalService(ProfessionalService service) throws Exception {
        Optional<ProfessionalService> serviceFounded = searchProfessionalServiceById(service.getId());
        if(serviceFounded.isPresent()){
            return repository.save(service);
        }else{
            throw new Exception("ID "+ service.getId() +" does not exist. Please check the service id and try again.");
        }
    }

    @Override
    public void deleteProfessionalService(Long id) throws Exception {
        Optional<ProfessionalService> serviceFounded = searchProfessionalServiceById(id);
        if(serviceFounded.isPresent()){
            repository.deleteById(id);
        }else{
            throw new Exception("ID "+id+" does not exist. Please check the service id and try again.");
        }
    }

}
