class CreatePlayerGameSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :player_game_sessions do |t|

      t.timestamps
    end
  end
end
