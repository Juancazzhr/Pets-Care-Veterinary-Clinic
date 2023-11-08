package petcareveterinary.employees.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import petcareveterinary.employees.model.Professional;

@Repository
public interface IProfessionalRepository extends JpaRepository<Professional, Long> {
}
