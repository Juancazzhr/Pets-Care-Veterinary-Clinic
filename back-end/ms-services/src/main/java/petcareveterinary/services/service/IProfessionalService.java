package petcareveterinary.services.service;

import petcareveterinary.services.model.ProfessionalService;

import java.util.List;
import java.util.Optional;

public interface IProfessionalService {
    List<ProfessionalService> listProfessionalServices();

    Optional<ProfessionalService> searchProfessionalServiceById(Long id) throws Exception;

    void createProfessionalService(ProfessionalService professional);

    void deleteProfessionalService(Long id) throws Exception;

    ProfessionalService updateProfessionalService(ProfessionalService professional) throws Exception;
}
