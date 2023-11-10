package com.petscare.msconsult.repository;

import com.petscare.msconsult.model.Consult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IConsult  extends JpaRepository<Consult, Long> {
}
