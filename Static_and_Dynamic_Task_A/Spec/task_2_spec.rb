require ('minitest/autorun')
require ('minitest/rg')
require_relative ('../card')
require_relative ('../testing_task_2')

class TestCardGame < Minitest::Test

  def setup
    @card1 = Card.new("Hearts", 6)
    @card2 = Card.new("Spades", 4)
    @cardGame = CardGame.new()
    @cards = [@card1, @card2]
  end

  def test_check_for_ace()
    result = @cardGame.check_for_ace(@card1)
    assert_equal(false, result)
  end


  def test_highest_card()
    assert_equal(@card1, @cardGame.highest_card(@card1, @card2))
  end

  def test_card_total()
    result = CardGame.cards_total(@cards)
    assert_equal("You have a total of 10", result)

  end
end
