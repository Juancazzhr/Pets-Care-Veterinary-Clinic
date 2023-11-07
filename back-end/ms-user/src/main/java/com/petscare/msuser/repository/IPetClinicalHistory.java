package com.petscare.msuser.repository;


import com.petscare.msuser.model.PetClinicalHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPetClinicalHistory extends JpaRepository<PetClinicalHistory, Long> {
}
