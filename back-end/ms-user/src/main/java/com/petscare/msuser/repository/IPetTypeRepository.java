package com.petscare.msuser.repository;

import com.petscare.msuser.model.PetType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPetTypeRepository  extends JpaRepository<PetType, Long> {
}
