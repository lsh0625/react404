package com.mysite.backend.service;

import com.mysite.backend.entity.Board;
import com.mysite.backend.repository.BoardRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class BoardServiceImpl implements BoardService{
    private final BoardRepository boardRepository;
    @Autowired
    public BoardServiceImpl(BoardRepository boardRepository){
        this.boardRepository=boardRepository;
    }

    @Override
    public Board save(Board board) {
        return boardRepository.save(board);
    }

    @Override
    public List<Board> findAll() {
        return boardRepository.findAll();
    }

    @Override
    public Optional<Board> findById(Long bno) {
        return boardRepository.findById(bno);
    }

    @Override
    public void deleteById(Long bno) {
        boardRepository.deleteById(bno);
    }
}
