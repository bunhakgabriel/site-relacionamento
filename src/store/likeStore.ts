import { Like, Match } from '../types/profile';
import { authStore } from './authStore';

class LikeStore {
  private likes: Like[] = [];
  private matches: Match[] = [];

  addLike(profileId: string): void {
    const userId = authStore.getCurrentUser()?.id;
    if (!userId) return;

    const existingLike = this.likes.find(
      like => like.userId === userId && like.profileId === profileId
    );

    if (!existingLike) {
      this.likes.push({
        userId,
        profileId,
        timestamp: Date.now()
      });

      // Check for match
      const hasMatchingLike = this.likes.find(
        like => like.userId === profileId && like.profileId === userId
      );

      if (hasMatchingLike) {
        this.createMatch(userId, profileId);
      }
    }
  }

  removeLike(profileId: string): void {
    const userId = authStore.getCurrentUser()?.id;
    if (!userId) return;

    this.likes = this.likes.filter(
      like => !(like.userId === userId && like.profileId === profileId)
    );
  }

  private createMatch(user1Id: string, user2Id: string): void {
    const match = {
      id: crypto.randomUUID(),
      user1Id,
      user2Id,
      timestamp: Date.now()
    };
    this.matches.push(match);

    // Remove likes when match is created
    this.likes = this.likes.filter(
      like => !(
        (like.userId === user1Id && like.profileId === user2Id) ||
        (like.userId === user2Id && like.profileId === user1Id)
      )
    );
  }

  removeMatch(matchId: string): void {
    this.matches = this.matches.filter(match => match.id !== matchId);
  }

  getLikesByUser(): string[] {
    const userId = authStore.getCurrentUser()?.id;
    if (!userId) return [];

    return this.likes
      .filter(like => like.userId === userId)
      .map(like => like.profileId);
  }

  getLikesForUser(): string[] {
    const userId = authStore.getCurrentUser()?.id;
    if (!userId) return [];

    return this.likes
      .filter(like => like.profileId === userId)
      .map(like => like.userId);
  }

  getMatches(): Match[] {
    const userId = authStore.getCurrentUser()?.id;
    if (!userId) return [];

    return this.matches.filter(
      match => match.user1Id === userId || match.user2Id === userId
    );
  }

  hasMatch(profileId: string): boolean {
    const userId = authStore.getCurrentUser()?.id;
    if (!userId) return false;

    return this.matches.some(
      match => (match.user1Id === userId && match.user2Id === profileId) ||
               (match.user1Id === profileId && match.user2Id === userId)
    );
  }
}

export const likeStore = new LikeStore();