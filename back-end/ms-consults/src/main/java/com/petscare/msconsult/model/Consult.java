package com.petscare.msconsult.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "Consults")
public class Consult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "created_at")
    private LocalDate cratedAt;

    @Column(name = "diagnostic")
    private String diagnostic;

    @Column(name = "drugs")
    private String drugs;

    @Column(name = "exams")
    private String exams;
    @Column(name = "pet_clinical_history_id")
    private Long petClinicalHistoryId;


}
