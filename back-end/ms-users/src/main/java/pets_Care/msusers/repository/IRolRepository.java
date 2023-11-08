package pets_Care.msusers.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pets_Care.msusers.model.Rol;

@Repository
public interface IRolRepository extends JpaRepository<Rol,Long> {
}
