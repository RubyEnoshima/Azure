import tweepy
import sys

consumer_key = "LGxL2TZNpIIdUxlEvvUGfW95v"

consumer_secret = "83MlrA0THfRKmv06EYW1oc6cZsqutCVVEJ7El1iMciuPAKtDCj"

access_token = "2569150141-iVsb8gzeSH0mgsZnJVuwM0bZ6dd4AajxfPhzmwF"
access_token_secret = "uOUGlo3toOUuh5SQShHdCfe2j23iuFiGKcCzhBt68OZ2s"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

def encuentraTweets(username):
    user = api.get_user(screen_name = username)
    tweets = api.user_timeline(user_id = user.id, count = 500, include_rts = False)
    res = []
    for tweet in tweets:
        res.append(tweet.text.lower())
    return res

  
tweets = encuentraTweets("vilaruben70")
for tweet in tweets:
    print(tweet)
