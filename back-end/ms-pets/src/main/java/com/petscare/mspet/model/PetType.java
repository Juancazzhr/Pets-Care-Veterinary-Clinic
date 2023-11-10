package com.petscare.mspet.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "PetTypes")
public class PetType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "type_name")
    private String typeName;
}

