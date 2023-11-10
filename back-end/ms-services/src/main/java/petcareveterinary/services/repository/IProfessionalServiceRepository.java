package petcareveterinary.services.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import petcareveterinary.services.model.ProfessionalService;

@Repository
public interface IProfessionalServiceRepository extends JpaRepository<ProfessionalService, Long> {

}
