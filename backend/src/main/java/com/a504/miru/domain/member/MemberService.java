package com.a504.miru.domain.member;

import com.a504.miru.domain.member.dto.LoginRequest;
import com.a504.miru.domain.member.entity.Member;
import com.a504.miru.global.jwt.dto.JwtObject;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepositoryImpl memberRepository;

    public Member findByUid(String uid) throws NoSuchElementException{
        return memberRepository.findByUid(uid).orElseThrow(NoSuchElementException::new);
    }

    @Transactional
    public void createMember(LoginRequest loginRequest, Member member) {
        // check if loginRequest is
        System.out.println(loginRequest);
        if (loginRequest.getUid().equals(member.getUid())) {
            member.addInfo(loginRequest);
            memberRepository.save(member);
        }
    }

}
