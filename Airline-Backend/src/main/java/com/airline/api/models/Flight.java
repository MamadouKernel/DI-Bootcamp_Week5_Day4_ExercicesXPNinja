package com.airline.api.models;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Flight implements Serializable {
    @Id
    private Long id;
    private String flightNumber;
    private String origin;
    private String destination;
    private String jourDepart;
    private String heureDepart;
    private String jourArrive;
    private String heureArrive;
    private double prix;
}
