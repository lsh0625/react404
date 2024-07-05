package com.mysite.backend.controller;

import com.mysite.backend.entity.Board;
import com.mysite.backend.repository.BoardRepository;
import com.mysite.backend.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @PostMapping("/board")
    public Board createBoard(@RequestBody Board board) {
        return boardService.save(board);
    }

    @GetMapping("/boards")
    public List<Board> getAllBoards() {
        return boardService.findAll();
    }

    @GetMapping("/boards/{bno}")
    public ResponseEntity<Board> getBoardById(@PathVariable Long bno) {
       Optional<Board> board = boardService.findById(bno);
        if (board.isPresent()) {
            System.out.println();
            return ResponseEntity.ok(board.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/boards/{bno}")
    public ResponseEntity<Board> updateBoard(@PathVariable Long bno,@RequestBody Board boardDetails){

        Optional<Board> optionalBoard = boardService.findById(bno);
        if(optionalBoard.isPresent()){
            Board board=optionalBoard.get();
            board.setTitle(boardDetails.getTitle());
            board.setContent(boardDetails.getContent());
            board.setAuthor(boardDetails.getAuthor());
            board.setHit(boardDetails.getHit());
            return ResponseEntity.ok(boardService.save(board));
        }else{
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/boards/{bno}")
    public ResponseEntity<Long> deleteBoard(@PathVariable Long bno){
        Optional<Board> optionalBoard=boardService.findById(bno);
        if(optionalBoard.isPresent()){
            boardService.deleteById(bno);
            return ResponseEntity.ok(bno);
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}