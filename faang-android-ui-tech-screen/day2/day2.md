
# Day 2 | Lists + State

## Example Output
Super basic list

![Day 2 Example Output](https://blinkmacalahan.github.io/faang-android-ui-tech-screen/day2/day2.png)

## Code Solution

```kotlin
data class AppState(
    val items: List<Item>,
    val onLikeClicked: (Item) -> Unit,
    val onLoadMore: () -> Unit
)

@PreviewScreenSizes
@Composable
fun Day2JetackPackFaangApp() {
    // Ideally AppState and onLikeClicked/onLoadMore should be in ViewModel
    lateinit var state: MutableState<AppState>

    fun onLikeClicked(item: Item) {
        state.value = state.value.copy(
            items = state.value.items.map { currentItem ->
                if (currentItem.id == item.id) {
                    currentItem.copy(isLiked = !currentItem.isLiked)
                } else {
                    currentItem
                }
            }
        )
    }

    fun onLoadMore() {
        val currentSize = state.value.items.size
        val newItems = buildList {
            repeat(5) { index ->
                val updatedIndex  = currentSize + index
                add(
                    Item(
                        title = "Title: $updatedIndex",
                        description = "Description: $updatedIndex",
                        isLiked = false,
                    )
                )
            }
        }
        state.value = state.value.copy(
            items = state.value.items + newItems
        )
    }

    // Should be `rememberSaveable` to persist across configuration changes, but don't want to
    // implement `AppState` Parcelize.
    state = remember { mutableStateOf(
        AppState(
            items = buildList {
                repeat(5) { index ->
                    add(
                        Item(
                            title = "Title: $index",
                            description = "Description: $index",
                            isLiked = false,
                        )
                    )
                }
            },
            onLikeClicked = ::onLikeClicked,
            onLoadMore = ::onLoadMore
        )
    )}


    Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
        Day2List(state.value, modifier = Modifier.padding(innerPadding))
    }
}

data class Item(
    val title: String,
    val description: String,
    val isLiked: Boolean
) {
    val id = UUID.randomUUID()
}

@Composable
fun Day2List(state: AppState, modifier: Modifier = Modifier){
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = modifier
    ) {
        LazyColumn(
            modifier = Modifier.weight(1f)
        ) {
            items(
                items = state.items,
                key = { item -> item.id }
            ) { item ->
                ListItem(item, state.onLikeClicked)
            }
        }
        Button(
            onClick = state.onLoadMore,
        ) {
            Text("Load More") // use string resource
        }
        Spacer(modifier = Modifier.height(12.dp))
    }
}

@Composable
fun ListItem(item: Item, onLikeClicked: (Item) -> Unit, modifier: Modifier = Modifier) {
    Column(
        modifier = modifier.padding(8.dp)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column(
                modifier = Modifier.weight(1f),
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Text(
                    text = item.title,
                    fontSize = 22.sp
                )
                Text(
                    text = item.description,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis
                )
            }
            // Use resource string for content desc
            IconButton(
                onClick = { onLikeClicked(item) },
            ) {
                val (icon, tint) = remember(item.isLiked) {
                    if (item.isLiked) {
                        Icons.Rounded.Favorite to Color.Blue
                    } else {
                        Icons.Rounded.FavoriteBorder to Color.Unspecified
                    }
                }
                Icon(
                    rememberVectorPainter(icon),
                    contentDescription = "Like",
                    tint = tint,
                    modifier = Modifier
                        .size(24.dp)
                )
            }
        }
        HorizontalDivider(modifier = modifier.fillMaxWidth())
    }
}

@Preview
@Composable
fun ListItemPreview() {
    Day2JetackPackFaangTheme {
        ListItem(
            item = Item(
                title = "Hello World",
                description = "This is a description block of text",
                isLiked = false
            ),
            onLikeClicked = {},
            modifier = Modifier.padding(16.dp)
        )
    }
}

@Preview
@Composable
fun Day2Preview() {
    Day2JetackPackFaangTheme {
        Day2List(
            AppState(
                items = buildList {
                    repeat(5) { index ->
                        add(Item(
                            title = "Hello World $index",
                            description = "This is a description block of text",
                            isLiked = false
                        ))
                    }
                },
                onLoadMore = {},
                onLikeClicked = {},
            ),
            modifier = Modifier.padding(16.dp)
        )
    }
}
```

