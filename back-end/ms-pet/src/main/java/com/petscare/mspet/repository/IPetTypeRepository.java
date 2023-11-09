package com.petscare.mspet.repository;

import com.petscare.mspet.model.PetType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPetTypeRepository  extends JpaRepository<PetType, Long> {
}
