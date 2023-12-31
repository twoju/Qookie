package com.a504.qookie.domain.member.entity;

import java.security.NoSuchAlgorithmException;
import java.time.LocalTime;

import com.a504.qookie.domain.member.dto.LoginRequest;
import com.a504.qookie.global.jwt.dto.JwtObject;
import com.a504.qookie.global.util.CryptoUtil;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table(
	indexes = {
		@Index(name = "idx_uid", columnList = "uid")
	}
)
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "member_id")
	private Long id;

	@Column(name = "uid")
	private String uid;

	@Column(name = "email")
	private String email;

	@Column(name = "name")
	private String name;

	@Column(name = "wakeup")
	private LocalTime wakeUp;

	@Column(name = "point")
	private int point;

	@Column(name = "active", nullable = false, columnDefinition = "TINYINT(1)")
	private Boolean active;
	@Column(name = "message_token")
	private String messageToken;

	public Member(JwtObject token) {
		email = token.getJwtPayload().getEmail();
		name = token.getJwtPayload().getName();
		uid = token.getJwtPayload().getUid();
	}

	public Member(String testEmail, String testName, String testUid) {
		// for test codes
		email = testEmail;
		name = testName;
		uid = testUid;
	}

	@PrePersist
	@PreUpdate
	private void setActiveDefault() {
		if (this.active == null) {
			this.active = true;
		}
	}

	public void addInfo(LoginRequest loginRequest) {
		email = loginRequest.getEmail();
		name = loginRequest.getDisplayName();
		uid = loginRequest.getUid();
		if (loginRequest.getMessageToken() != null) {
			messageToken = loginRequest.getMessageToken();
		}
	}

	public void updateMessageToken(String mt) {
		if (mt != null) {
			messageToken = mt;
		}
	}

	public void setTime(LocalTime wakeUp) {
		this.wakeUp = wakeUp;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean deleteMember() throws NoSuchAlgorithmException {
		this.active = false;
		this.uid = "del" + CryptoUtil.hashString(this.uid);
		return true;
	}

	public void setPoint(int point) {
		this.point += point;
	}

	public void buy(int point) {
		this.point -= point;
	}
}
