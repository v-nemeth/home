class Player < ApplicationRecord
  has_many :player_game_sessions
  has_many :game_sessions, through: :player_game_sessions
end
