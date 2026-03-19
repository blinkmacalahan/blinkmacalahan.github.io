
# Day 1

## Example Output
![Day 1 Example Output](https://https://blinkmacalahan.github.io/faang-android-ui-tech-screen/day1/day1.png)

## Code Solution

```kotlin
data class ProfileState(
    val name: String,
    val subtitle: String,
    val isFollowing: Boolean,
    val followersStatCount: Int,
    val postStatCount: Int,
    val followingStatCount: Int,
)

@Composable
fun ProfileScreen(
    modifier: Modifier,
    profileState: ProfileState,
    onFollowClick: () -> Unit
) {
    val buttonText = if (profileState.isFollowing) "Following" else "Follow"
    Column(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Image(
                painter = painterResource(R.drawable.profile),
                contentDescription = "Profile Picture",
                modifier = Modifier
                    .size(120.dp)
                    .clip(CircleShape)
            )
            Button(
                onClick = onFollowClick
            ) {
                Text(buttonText)
            }
        }

        Text(
            text = profileState.name,
            fontSize = 24.sp
        )
        Text(
            text = profileState.subtitle,
            fontStyle = FontStyle.Italic,
            fontSize = 16.sp
        )
        StatsRow(
            followersStatCount = profileState.followersStatCount,
            postStatCount = profileState.postStatCount,
            followingStatCount = profileState.followingStatCount
        )
    }
}

@Preview(showBackground = true)
@Composable
fun ProfileScreenPreview() {
    JetpackComposeCrashCourseTheme {
        ProfileScreen(
            modifier = Modifier.padding(16.dp),
            profileState = _profileState,
            onFollowClick = {

            }
        )
    }
}

@Composable
fun StatsRow(
    followersStatCount: Int,
    postStatCount: Int,
    followingStatCount: Int
) {
    Row(
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier
            .fillMaxWidth()
            .padding(start = 0.dp, top = 16.dp, end = 0.dp, bottom = 8.dp)
    ) {
        TextStat(
            count = followersStatCount,
            text = "followers" // should come from string resources and handle plural case
        )
        TextStat(
            count = postStatCount,
            text = "posts" // should come from string resources and handle plural case
        )
        TextStat(
            count = followingStatCount,
            text = "following" // should come from string resources
        )
    }
}

@Composable
fun TextStat(
    count: Int,
    text: String
) {
    Column {
        Text(  // Maybe add special number formatting (1000 vs 1,000 vs 1k)
            text = "$count",
            fontWeight = FontWeight.ExtraBold
        )
        Text(text)
    }
}
```


