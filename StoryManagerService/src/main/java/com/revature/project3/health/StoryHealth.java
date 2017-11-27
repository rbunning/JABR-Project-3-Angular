package com.revature.project3.health;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;

public class StoryHealth implements HealthIndicator{

	@Override
	public Health health() {
		
		return Health.down().build();
	}

}
