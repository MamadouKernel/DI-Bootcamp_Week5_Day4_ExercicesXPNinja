package com.airline.api.controllers;

import com.airline.api.models.Flight;
import com.airline.api.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flights")
public class FlightController {
    @Autowired
    private FlightRepository flightRepository;

    @GetMapping()
    public ResponseEntity<List<Flight>> getAll() {
        return ResponseEntity.ok(flightRepository.findAll());
    }

    @PostMapping()
    public ResponseEntity<Flight> create(@RequestBody Flight flight) {
        return ResponseEntity.ok(flightRepository.save(flightRepository.save(flight)));
    }
}
