package com.mysite.backend.service;

import com.mysite.backend.entity.Board;

import java.util.List;
import java.util.Optional;

public interface BoardService {

    Board save(Board board);

    List<Board> findAll();

    Optional<Board> findById(Long bno);

    void deleteById(Long bno);

}
